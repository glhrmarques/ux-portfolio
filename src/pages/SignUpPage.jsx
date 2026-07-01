import { useEffect } from 'react'
import BackArrow from '../components/BackArrow'
import Prism from 'prismjs'
import 'prismjs/components/prism-go'
import 'prismjs/components/prism-sql'
import 'prismjs/themes/prism.css'

export default function SignUpPage() {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <main className="flex-1 min-w-0 flex flex-col px-6 py-12 md:px-[240px] md:py-16">
      {/* Intro */}
      <section className="flex flex-col gap-6 mb-[48px]">
        <BackArrow to="/" />
        <h1 className="font-['Figtree',sans-serif] text-[32px] md:text-[44px] font-medium leading-[1.2] text-black">Sign up in GO</h1>
        <div className="flex flex-wrap gap-2">
          <span className="px-4 py-1.5 rounded-full border border-[#d9d9d9] text-[14px] font-medium text-black font-['Figtree',sans-serif]">June, 2026</span>
          <span className="px-4 py-1.5 rounded-full border border-[#d9d9d9] text-[14px] font-medium text-black font-['Figtree',sans-serif]">GO</span>
        </div>
      </section>

      {/* Content */}
      <section className="flex flex-col gap-[48px]">
        <div className="flex flex-col gap-[16px]">
          <h2 className="font-['Figtree',sans-serif] text-[26px] font-semibold leading-[1.2] text-black">Objective</h2>
          <p className="text-[18px] font-normal leading-[1.5] text-black">Create 2 endpoints for sign in and sign up. In this study I learned how to integrate with a database, database modeling and hashing.</p>
        </div>

        <hr className="border-[#d9d9d9]" />

        <h2 className="font-['Figtree',sans-serif] text-[26px] font-semibold leading-[1.2] text-black">1. Sign up endpoint</h2>

        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[8px]">
            <p className="font-['Figtree',sans-serif] text-[18px] font-semibold leading-[1.2] text-black">Creating the USERS table</p>
            <p className="text-[18px] font-normal leading-[1.5] text-black">In the DB I created the table which will be responsible the store all users registered with SQL:</p>
          </div>
          <pre className="bg-[#f3f3f3] rounded-[8px] p-[12px] w-full"><code className="language-sql">{`CREATE TYPE user_tipo AS ENUM ('nutricionista', 'admin', 'paciente');

CREATE TABLE usuarios (
  id            INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  nome          VARCHAR NOT NULL,
  email         VARCHAR UNIQUE NOT NULL,
  senha_hash    VARCHAR NOT NULL,
  tipo          user_tipo NOT NULL,
  ativo         BOOLEAN DEFAULT true,
  criado_em     TIMESTAMP WITH TIME ZONE DEFAULT now(),
  atualizado_em TIMESTAMP WITH TIME ZONE DEFAULT now()
);`}</code></pre>
        </div>

        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[8px]">
            <p className="font-['Figtree',sans-serif] text-[18px] font-semibold leading-[1.2] text-black">Creating the same schema in GO to create users.</p>
            <p className="text-[18px] font-normal leading-[1.5] text-black">Before, creating the schema, I imported all packages necessary to build the endpoint.</p>
          </div>
          <pre className="bg-[#f3f3f3] rounded-[8px] p-[12px] w-full"><code className="language-go">{`import (
    "context"
    "log"
    "net/http"
    "os"
    "time"
    "golang.org/x/crypto/bcrypt"
    "github.com/gin-contrib/cors"
    "github.com/gin-gonic/gin"
    "github.com/jackc/pgx/v5/pgxpool"
    "github.com/joho/godotenv"
)`}</code></pre>
          <pre className="bg-[#f3f3f3] rounded-[8px] p-[12px] w-full"><code className="language-go">{`type Users struct {
    ID int \`json:"id"\`
    Name string \`json:"name"\`
    Email string \`json:"email"\`
    PasswordHash string \`json:"password_hash,omitempty"\`
    Type string \`json:"type"\`
    Active bool \`json:"active"\`
    CreatedAt time.Time \`json:"created_at"\`
}`}</code></pre>
        </div>

        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[8px]">
            <p className="font-['Figtree',sans-serif] text-[18px] font-semibold leading-[1.2] text-black">Creating the endpoint</p>
            <p className="text-[18px] font-normal leading-[1.5] text-black">Before, creating the schema, I imported all packages necessary to build the endpoint.</p>
          </div>
          <pre className="bg-[#f3f3f3] rounded-[8px] p-[12px] w-full"><code className="language-go">{`function addUsers(c *gin.Context){
    var newUser Users

    if err := c.ShouldBindJSON(&newUser); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
    }
    
    HashedPassword, err := bcrypt.GenerateFromPassword([]byte(newUser.PasswordHash), bcrypt.DefaultCost)

    if err != nil {
        c.JSON(http.InternalServerError, gin.H{"error": "failed to hash password"}) 
    }

    err := db.QueryRow(
        \`INSERT INTO users (name, email, password_hash,type)
        VALUES ($1, $2, $3, $4)
        RETURNING id, active, created_at\`
    ).Scan(&newUser.ID, &newUser.Active, &newUser.CreatedAt)

    if err != nil {
       c.JSON(http.InternalServerError, gin.H{"error": "failed to create user"})
    } 

    newUser.PasswordHash = ""
    c.JSON(http.StatusCreated, newUser)
}`}</code></pre>
        </div>
      </section>
    </main>
  )
}
