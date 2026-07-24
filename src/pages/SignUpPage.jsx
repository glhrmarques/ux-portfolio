import { useEffect } from 'react'
import { motion } from 'motion/react'
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
    <motion.main 
      className="flex-1 min-w-0 flex flex-col px-6 py-12 md:px-[240px] md:py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Intro */}
      <section className="flex flex-col gap-6 mb-[48px]">
        <BackArrow to="/" />
        <h1 className="font-['Figtree',sans-serif] text-[32px] md:text-[44px] font-medium leading-[1.2] text-black">Cadastro em GO</h1>
        <div className="flex flex-wrap gap-2">
          <span className="px-4 py-1.5 rounded-full border border-[#d9d9d9] text-[14px] font-medium text-black font-['Figtree',sans-serif]">Junho de 2026</span>
          <span className="px-4 py-1.5 rounded-full border border-[#d9d9d9] text-[14px] font-medium text-black font-['Figtree',sans-serif]">GO</span>
        </div>
      </section>

      {/* Content */}
      <section className="flex flex-col gap-[48px]">
        <div className="flex flex-col gap-[16px]">
          <h2 className="font-['Figtree',sans-serif] text-[26px] font-semibold leading-[1.2] text-black">Objetivo</h2>
          <p className="text-[18px] font-normal leading-[1.5] text-black">Criar dois endpoints para login e cadastro. Neste estudo, aprendi a integrar com um banco de dados, modelar dados e usar hashing.</p>
        </div>

        <hr className="border-[#d9d9d9]" />

        <h2 className="font-['Figtree',sans-serif] text-[26px] font-semibold leading-[1.2] text-black">1. Endpoint de cadastro</h2>

        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[8px]">
            <p className="font-['Figtree',sans-serif] text-[18px] font-semibold leading-[1.2] text-black">Criando a tabela USERS</p>
            <p className="text-[18px] font-normal leading-[1.5] text-black">No banco de dados, criei a tabela responsável por armazenar todos os usuários cadastrados com SQL:</p>
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
            <p className="font-['Figtree',sans-serif] text-[18px] font-semibold leading-[1.2] text-black">Criando o mesmo schema em GO para cadastrar usuários.</p>
            <p className="text-[18px] font-normal leading-[1.5] text-black">Antes de criar o schema, importei todos os pacotes necessários para construir o endpoint.</p>
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
            <p className="font-['Figtree',sans-serif] text-[18px] font-semibold leading-[1.2] text-black">Criando o endpoint</p>
            <p className="text-[18px] font-normal leading-[1.5] text-black">Aqui está a implementação do endpoint de cadastro.</p>
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
    </motion.main>
  )
}
