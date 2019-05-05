package webapp

import (
	"html/template"
	"log"
	"net/http"
	"time"
)

//PageVariables - basic model
type PageVariables struct {
	Date string
	Time string
}
//Start - main entrypoint to the webapp package
func Start() {
	http.HandleFunc("/", HomePage)
	log.Fatal(http.ListenAndServe(":8080", nil))
}

//HomePage - main home function
func HomePage(w http.ResponseWriter, r *http.Request) {
	now := time.Now()              // find the time right now
	HomePageVars := PageVariables{ //store the date and time in a struct
		Date: now.Format("02-01-2006"),
		Time: now.Format("15:04:05"),
	}

	t, err := template.ParseFiles("pkg/webapp/homepage.html") //parse the html file homepage.html
	if err != nil {                                // if there is an error
		log.Print("template parsing error: ", err) // log it
	}
	err = t.Execute(w, HomePageVars) //execute the template and pass it the HomePageVars struct to fill in the gaps
	if err != nil {                  // if there is an error
		log.Print("template executing error: ", err) //log it
	}
}
