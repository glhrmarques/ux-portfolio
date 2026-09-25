import { useEffect } from 'react'
import { motion } from 'motion/react'
import BackArrow from '../components/BackArrow'
import Prism from 'prismjs'
import 'prismjs/components/prism-go'
import 'prismjs/components/prism-bash'
import 'prismjs/themes/prism.css'

export default function RestfulApiGoPage() {
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
        <h1 className="font-['Figtree',sans-serif] text-[32px] md:text-[44px] font-medium leading-[1.2] text-black">Building My First RESTful API with Go</h1>
        <div className="flex flex-wrap gap-2">
          <span className="px-4 py-1.5 rounded-full border border-[#d9d9d9] text-[14px] font-medium text-black font-['Figtree',sans-serif]">May 2026</span>
          <span className="px-4 py-1.5 rounded-full border border-[#d9d9d9] text-[14px] font-medium text-black font-['Figtree',sans-serif]">GO</span>
          <span className="px-4 py-1.5 rounded-full border border-[#d9d9d9] text-[14px] font-medium text-black font-['Figtree',sans-serif]">net/http</span>
          <span className="px-4 py-1.5 rounded-full border border-[#d9d9d9] text-[14px] font-medium text-black font-['Figtree',sans-serif]">Gin</span>
        </div>
      </section>

      {/* Content */}
      <div className="flex flex-col gap-[48px]">
        {/* Objective */}
        <div className="flex flex-col gap-[16px]">
          <h2 className="font-['Figtree',sans-serif] text-[26px] font-semibold leading-[1.2] text-black">Goal</h2>
          <p className="text-[18px] font-normal leading-[1.5] text-black">I started learning software development a few months ago after a friend at work encouraged me. He believed it would help me grow as a design engineer.</p>
          <p className="text-[18px] font-normal leading-[1.5] text-black">I built a RESTful API with three endpoints: one to list all teams stored locally, one to find a team by ID, and one to add a new team.</p>
        </div>

        {/* Step 1 */}
        <div className="flex flex-col gap-[24px]">
          <h2 className="font-['Figtree',sans-serif] text-[26px] font-semibold leading-[1.2] text-black">Development</h2>
          <div className="flex flex-col gap-[8px]">
            <p className="font-['Figtree',sans-serif] text-[18px] font-semibold leading-[1.2] text-black">1. I created a main.go file in the root folder and ran this command:</p>
          </div>
          <div className="flex flex-col gap-[8px]">
            <pre className="bg-[#f3f3f3] rounded-[8px] p-[12px] w-full"><code className="language-bash">{`$ go mod init example/web-teams-service`}</code></pre>
            <p className="text-[14px] font-normal text-[#7f7f7f] leading-[1.5]">This sets up a Go module to track the project’s dependencies.</p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[8px]">
            <p className="font-['Figtree',sans-serif] text-[18px] font-semibold leading-[1.2] text-black">2. Adding the data:</p>
          </div>
          <pre className="bg-[#f3f3f3] rounded-[8px] p-[12px] w-full"><code className="language-go">{`package main

import (
    "net/http"
    "github.com/gin-gonic/gin"
)

type team struct {
   ID string \`json"id"\`
   Name string \`json"name"\`
   Country string \`json"country"\`
}

var teams = []team {
    {ID:"1", Name:"Chelsea", Country:"England"},
    {ID:"2", Name:"Barcelona", Country:"Spain"},
    {ID:"3", Name:"Forest Green", Country:"England"},
    {ID:"4", Name:"Bayer", Country:"Germany"},
}`}</code></pre>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[8px]">
            <p className="font-['Figtree',sans-serif] text-[18px] font-semibold leading-[1.2] text-black">3. Creating the first endpoint, /getAllTeams</p>
          </div>
          <pre className="bg-[#f3f3f3] rounded-[8px] p-[12px] w-full"><code className="language-go">{`func getAllTeams(c *gin.Context) {
    c.IndentedJSON(http.StatusOK, teams)
}`}</code></pre>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-[18px] text-black">
              <span className="sm:w-[300px] lg:w-[500px] shrink-0">c</span>
              <span className="flex-1 sm:text-right">A variable that holds the request <em>context</em></span>
            </div>
            <hr className="border-[#f0f0f0]" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-[18px] text-black">
              <span className="sm:w-[300px] lg:w-[500px] shrink-0">gin.Context</span>
              <span className="flex-1 sm:text-right">Gives c access to the HTTP request and response</span>
            </div>
            <hr className="border-[#f0f0f0]" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-[18px] text-black">
              <span className="sm:w-[300px] lg:w-[500px] shrink-0">c.Indented(JSON)</span>
              <span className="flex-1 sm:text-right">Converts the response to JSON</span>
            </div>
          </div>

          <pre className="bg-[#f3f3f3] rounded-[8px] p-[12px] w-full"><code className="language-go">{`func main() {
    router := gin.Default()
    router.GET("/allTeams", getAllTeams)
    router.Run("localhost:8080")
}`}</code></pre>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[8px]">
            <p className="font-['Figtree',sans-serif] text-[18px] font-semibold leading-[1.2] text-black">4. Creating the second endpoint, /getTeamById</p>
          </div>
          <pre className="bg-[#f3f3f3] rounded-[8px] p-[12px] w-full"><code className="language-go">{`func getTeamByID(c *gin.Context) {
    id := c.Param("id")

    for _, t := range teams {
        if t.ID == id {
            c.IndentedJSON(http.StatusOK, t)
        }
    }

    c.IndentedJSON(http.StatusNotFound, gin.H{"message":"team not found"})
}`}</code></pre>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-[18px] text-black">
              <span className="sm:w-[300px] lg:w-[500px] shrink-0">c.Param("id")</span>
              <span className="flex-1 sm:text-right">Reads the ID from the URL</span>
            </div>
            <hr className="border-[#f0f0f0]" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-[18px] text-black">
              <span className="font-['Inconsolata',monospace] sm:w-[300px] lg:w-[500px] shrink-0">for _, t := range teams</span>
              <span className="flex-1 sm:text-right">Checks each team for a matching ID</span>
            </div>
            <hr className="border-[#f0f0f0]" />
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between text-[18px] text-black gap-2">
              <span className="font-['Inconsolata',monospace] sm:w-[300px] lg:w-[500px] shrink-0 whitespace-pre-wrap">{`if t.ID == id {\n   c.IndentedJSON(http.StatusOK, t)\n}`}</span>
              <span className="flex-1 sm:text-right">If the ID matches, returns the team with a 200 status code</span>
            </div>
            <hr className="border-[#f0f0f0]" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-[18px] text-black">
              <span className="font-['Inconsolata',monospace] sm:w-[300px] lg:w-[500px] shrink-0 text-[16px] lg:text-[18px]">{'c.IndentedJSON(http.StatusNotFound, gin.H{"message":"team not found"})'}</span>
              <span className="flex-1 sm:text-right">If no ID matches, returns 404 with a “team not found” message</span>
            </div>
          </div>

          <pre className="bg-[#f3f3f3] rounded-[8px] p-[12px] w-full"><code className="language-go">{`func main() {
    router := gin.Default()
    router.GET("/allTeams", getAllTeams)
    router.GET("/allTeams/:id", getTeamByID)
    router.Run("localhost:8080")
}`}</code></pre>
        </div>

        {/* Step 5 */}
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[8px]">
            <p className="font-['Figtree',sans-serif] text-[18px] font-semibold leading-[1.2] text-black">5. Creating the third endpoint, /addNewTeam</p>
          </div>
          <pre className="bg-[#f3f3f3] rounded-[8px] p-[12px] w-full"><code className="language-go">{`func addTeam(c *gin.Context) {
    var newTeam team

    if err := c.BindJSON(&newTeam); err != nil {
        return
    }

    teams = append(teams, newTeam)
    c.IndentedJSON(http.StatusCreated, newTeam)

}`}</code></pre>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-[18px] text-black">
              <span className="font-['Inconsolata',monospace] sm:w-[300px] lg:w-[500px] shrink-0">var newTeam team</span>
              <span className="flex-1 sm:text-right">Creates a variable using the team data structure</span>
            </div>
            <hr className="border-[#f0f0f0]" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-[18px] text-black">
              <span className="font-['Inconsolata',monospace] sm:w-[300px] lg:w-[500px] shrink-0 text-[14px] lg:text-[18px]">{'if err := c.BindJSON(&newTeam); err != nil'}</span>
              <span className="flex-1 sm:text-right">Reads the JSON request body into newTeam. The &amp; passes a pointer so BindJSON can update it.</span>
            </div>
            <hr className="border-[#f0f0f0]" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-[18px] text-black">
              <span className="font-['Inconsolata',monospace] sm:w-[300px] lg:w-[500px] shrink-0">teams = append(teams, newTeam)</span>
              <span className="flex-1 sm:text-right">Adds newTeam to the list so it can be returned in later requests.</span>
            </div>
            <hr className="border-[#f0f0f0]" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-[18px] text-black">
              <span className="font-['Inconsolata',monospace] sm:w-[300px] lg:w-[500px] shrink-0 text-[14px] lg:text-[18px]">c.IndentedJSON(http.StatusCreated, newTeam)</span>
              <span className="flex-1 sm:text-right">Returns 201 when the team is created.</span>
            </div>
          </div>

          <pre className="bg-[#f3f3f3] rounded-[8px] p-[12px] w-full"><code className="language-go">{`func main() {
    router := gin.Default()

    router.GET("/allTeams", getAllTeams)
    router.GET("/allTeams/:id", getTeamByID)
    router.POST("/allTeams", addTeam)
    router.Run("localhost:8080")
}`}</code></pre>
        </div>
      </div>
    </motion.main>
  )
}
