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
        <h1 className="font-['Figtree',sans-serif] text-[32px] md:text-[44px] font-medium leading-[1.2] text-black">Creating my first RESTful API with GO</h1>
        <div className="flex flex-wrap gap-2">
          <span className="px-4 py-1.5 rounded-full border border-[#d9d9d9] text-[14px] font-medium text-black font-['Figtree',sans-serif]">May, 2026</span>
          <span className="px-4 py-1.5 rounded-full border border-[#d9d9d9] text-[14px] font-medium text-black font-['Figtree',sans-serif]">GO</span>
          <span className="px-4 py-1.5 rounded-full border border-[#d9d9d9] text-[14px] font-medium text-black font-['Figtree',sans-serif]">net/http</span>
          <span className="px-4 py-1.5 rounded-full border border-[#d9d9d9] text-[14px] font-medium text-black font-['Figtree',sans-serif]">Gin</span>
        </div>
      </section>

      {/* Content */}
      <div className="flex flex-col gap-[48px]">
        {/* Objective */}
        <div className="flex flex-col gap-[16px]">
          <h2 className="font-['Figtree',sans-serif] text-[26px] font-semibold leading-[1.2] text-black">Objective</h2>
          <p className="text-[18px] font-normal leading-[1.5] text-black">I've been studying software development for a couple months after a friend from the work encouraged me to start studying. Specially because he claimed it would be good for my design engineering journey.</p>
          <p className="text-[18px] font-normal leading-[1.5] text-black">So I built a RESTful API with 3 endpoints: 1. To return all the teams in my local storage, 2. Find a team by ID, and 3. Endpoint to add new teams.</p>
        </div>

        {/* Step 1 */}
        <div className="flex flex-col gap-[24px]">
          <h2 className="font-['Figtree',sans-serif] text-[26px] font-semibold leading-[1.2] text-black">Breakthrough</h2>
          <div className="flex flex-col gap-[8px]">
            <p className="font-['Figtree',sans-serif] text-[18px] font-semibold leading-[1.2] text-black">1. In the root folder, I created a file named as main.go and run the command:</p>
          </div>
          <div className="flex flex-col gap-[8px]">
            <pre className="bg-[#f3f3f3] rounded-[8px] p-[12px] w-full"><code className="language-bash">{`$ go mod init example/web-teams-service`}</code></pre>
            <p className="text-[14px] font-normal text-[#7f7f7f] leading-[1.5]">Used to track all dependencies in the project.</p>
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
            <p className="font-['Figtree',sans-serif] text-[18px] font-semibold leading-[1.2] text-black">3. Building the first endPoint, /getAllTeams.</p>
          </div>
          <pre className="bg-[#f3f3f3] rounded-[8px] p-[12px] w-full"><code className="language-go">{`func getAllTeams(c *gin.Context) {
    c.IndentedJSON(http.StatusOK, teams)
}`}</code></pre>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-[18px] text-black">
              <span className="sm:w-[300px] lg:w-[500px] shrink-0">c</span>
              <span className="flex-1 sm:text-right">Stands for <em>context,</em> like a variable that it's receiving value</span>
            </div>
            <hr className="border-[#f0f0f0]" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-[18px] text-black">
              <span className="sm:w-[300px] lg:w-[500px] shrink-0">gin.Context</span>
              <span className="flex-1 sm:text-right">Is responsible to give context of http request and response to c</span>
            </div>
            <hr className="border-[#f0f0f0]" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-[18px] text-black">
              <span className="sm:w-[300px] lg:w-[500px] shrink-0">c.Indented(JSON)</span>
              <span className="flex-1 sm:text-right">It's serializing the response into a JSON response</span>
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
            <p className="font-['Figtree',sans-serif] text-[18px] font-semibold leading-[1.2] text-black">4. Building the second endPoint, /getTeamById</p>
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
              <span className="flex-1 sm:text-right">Add in the url the query id</span>
            </div>
            <hr className="border-[#f0f0f0]" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-[18px] text-black">
              <span className="font-['Inconsolata',monospace] sm:w-[300px] lg:w-[500px] shrink-0">for _, t := range teams</span>
              <span className="flex-1 sm:text-right">Loops in the entire teams to match the id provided</span>
            </div>
            <hr className="border-[#f0f0f0]" />
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between text-[18px] text-black gap-2">
              <span className="font-['Inconsolata',monospace] sm:w-[300px] lg:w-[500px] shrink-0 whitespace-pre-wrap">{`if t.ID == id {\n   c.IndentedJSON(http.StatusOK, t)\n}`}</span>
              <span className="flex-1 sm:text-right">If the ID matches, the response will be 201 and display the team that matched</span>
            </div>
            <hr className="border-[#f0f0f0]" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-[18px] text-black">
              <span className="font-['Inconsolata',monospace] sm:w-[300px] lg:w-[500px] shrink-0 text-[16px] lg:text-[18px]">{'c.IndentedJSON(http.StatusNotFound, gin.H{"message":"team not found"})'}</span>
              <span className="flex-1 sm:text-right">In case the ID does not match, the response will be 404 and display a message team not found</span>
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
            <p className="font-['Figtree',sans-serif] text-[18px] font-semibold leading-[1.2] text-black">5. Building the third endPoint, /addNewTeam</p>
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
              <span className="flex-1 sm:text-right">Asign a new variable indicating the schema to be use in the new data</span>
            </div>
            <hr className="border-[#f0f0f0]" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-[18px] text-black">
              <span className="font-['Inconsolata',monospace] sm:w-[300px] lg:w-[500px] shrink-0 text-[14px] lg:text-[18px]">{'if err := c.BindJSON(&newTeam); err != nil'}</span>
              <span className="flex-1 sm:text-right">It deserializes from the request body to a team struct, and & indicates the BindJSON() how to map it.</span>
            </div>
            <hr className="border-[#f0f0f0]" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-[18px] text-black">
              <span className="font-['Inconsolata',monospace] sm:w-[300px] lg:w-[500px] shrink-0">teams = append(teams, newTeam)</span>
              <span className="flex-1 sm:text-right">The newTeam must be add/append into teams. So, when I use the end point /getAllTeams or by ID the response will show the new data too.</span>
            </div>
            <hr className="border-[#f0f0f0]" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-[18px] text-black">
              <span className="font-['Inconsolata',monospace] sm:w-[300px] lg:w-[500px] shrink-0 text-[14px] lg:text-[18px]">c.IndentedJSON(http.StatusCreated, newTeam)</span>
              <span className="flex-1 sm:text-right">If the team is successfully created, the response will be 201.</span>
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
