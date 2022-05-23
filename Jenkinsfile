pipeline {
    agent any

        triggers {
            pollSCM('* * * * *')
        }

        tools {
            nodejs "Node"
        }

    stages{
        stage("Build Project") {
            parallel {
                stage("Build Back End") {
                   // when {
                    //    anyOf {
                    //        changeset "todo-list-shareable-backend/src/**"
                     //       changeset "todo-list-shareable-backend/test/**"
                     //   }
                   // }
                    steps {
                        sh "docker-compose build nestjs_backend"
                    }
                }
                stage("Build Front End"){
                    //when {
                     //   anyOf {
                     //       changeset "todo-list-shareable-frontend/src/**"
                      //      changeset "todo-list-shareable-frontend/tests/**"
                      //  }
                  //  }
                    steps {
                    echo "build front-end"
                       // sh "docker-compose build vue_frontend"
                    }
                }
            }
        }
        stage("Unit Test"){
            parallel {
                stage("Unit Test Back-End") {
                    when {
                        anyOf {
                            changeset "todo-list-shareable-backend/src/**"
                            changeset "todo-list-shareable-backend/test/**"
                        }
                    }
                    steps {
                        sh "npm run test"
                    }
                }
                stage("Unit Test Front End"){
                    when {
                        anyOf {
                            changeset "todo-list-shareable-frontend/src/**"
                            changeset "todo-list-shareable-frontend/tests/**"
                        }
                    }
                    steps {
                        sh "npm run test:unit"
                    }
                }
            }
        }
        stage("Run") {
            steps{
                sh "docker-compose up -d"
            }
        }
    }
}