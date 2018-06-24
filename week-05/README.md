For the final Weekly Problem, you’re going to consider APIs from the producer side—rather than the
consumer side we’ve focused on the last several weeks.

For this project, I want you to imagine an API that provides data about all courses coming up for
the next semester at IIT.

Come up with at least three API endpoints that return data. Think about the data that would be most
useful to include in such an API. For each endpoint, document the endpoint (e.g., `GET /courses`)
and include a JSON example of the data that someone can expect to be returned.

You can describe your API right in this README file. Follow the guidance at <http://jsonapi.org>
and consider the pretty dead-simple documentation of our old example friend, the GitHub API, in this
case, the endpoints for GitHub Issues: <https://developer.github.com/v3/issues/>

As always, post to Basecamp as you’re working on this problem.

GET /instructors
{  
  "metadata" {
    "semester": "Fall 2018",
    "last-update": "2018-06-18 12:00:00"    
  },
  "data" [
    {
      "type": "professor",
      "id": "kstolley",
      "name": "Karl Stolley",
      "office": "SB 223",
      "email": "karl.stolley@gmail.com",
      "courses" [
        {
          "courseName": "ITMD361-01",
          "link": "/courses/ITMD361-01"
        },
        {
          "courseName": "ITMD361-02",
          "link": "/courses/ITMD361-02"
        }
      ]
    },
    {
      "type": "professor",
      "id": "mlee",
      "name": "Michael Lee",
      "office": "SB 112J",
      "email": "mlee@iit.edu",
      "courses" [
        {
          "courseName": CS351-01,
          "link": "/courses/CS351-01"
        }
      ]
    },
    {
      ...
    },
    {
      ... the rest of the instructors for the semester ...
    },
    {
      ...
    }
  ]
}

GET /courses
{
  "metadata" {
    "semester": "Fall 2018",
    "last-update": "2018-06-18 18:00:00Z"    
  },
  "data" [
    {
      "type": "lecture",
      "id": "CS351-01",
      "crn": 10910,
      "instructor" {
        "name": "Michael Lee",
        "link": "/instructors/mlee"
      },
      "credits": 3.000,
      "subject": "CS",
      "section": "01",
      "campus": "Mies",
      "tite": "Systems Programming",
      "days": [Monday,Wednesday,Friday],
      "seats": 30,
      "enrolled": 30,
      "free": 0,
      "waitlisted": 7,
      "time" {
        "start": 13:50:00,
        "end": 15:05:00,
        "duration": 01:15:00
      },
      "location" {
        "short": "PS 111",
        "long": "Robert A. Pritzker Science Center, Room 111",
        "building": "Pritzker Science Center",
        "room": "111"
      },
      "dates" {
        "start": 2018-08-20,
        "end": 2018-12-01,
        "duration": "16 weeks"
      }
    },
    {
      ...
    },
    {
      ... the rest of classes for the semester ...
    },
    {
      ...
    }
  ]
}

GET /subjects
{
  "metadata" {
    "semester": "Fall 2018",
    "last-update": "2018-06-18 18:00:00Z"   
  },
  "data" [
    {
      "type": "subject",
      "id": "CS",
      "longID": "Computer Science",
      "courses" [
        {
          "courseID": "CS351-01",
          "link": "/courses/CS351-01"
        },
        {
          "courseID": "CS351-02",
          "link": "/courses/CS351"
        }
      ]
    },
    {
      "type": subject,
      "id": "ITM",
      "longID": "Information Technology and Management",
      "courses" [
        {
          "courseID": "ITM100-01".
          "link": "courses/ITM100-01"
        },
        {
          "courseID": "ITM301-01".
          "link": "courses/ITM301-01"
        },
        {
          "courseID": "ITM311-01".
          "link": "courses/ITM311-01"
        }
      ]
    }
  ]
}
