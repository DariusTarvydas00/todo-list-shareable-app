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
                stage ("Build Back End ") {
                    steps {
                        dir ("todo-list-shareable-backend"){
                            sh "docker build ."
                        }
                        //sh "docker-compose build nestjs_backend"
                    }
                }
                stage ("Build Front End") {
                    steps {
                        dir ("todo-list-shareable-frontend"){
                            sh "docker build ."
                        }
                        //sh "docker-compose build vue_frontend"
                    }
                }
            }
        }
        stage("Unit Test"){
            parallel {
                stage("Unit Test Back-End") {
                    steps {
                        dir ("todo-list-shareable-frontend"){
                            sh "npm run test"
                        }
                      //sh "docker-compose build vue_frontend"
                    }
                }
                stage("Unit Test Front End"){
                    steps {
                        dir ("todo-list-shareable-frontend"){
                            sh "npm run test:unit"
                        }
                      //sh "docker-compose build vue_frontend"
                    }
                }
            }
        }
        stage("Run in Development Environment") {
            steps{
                sh "docker-compose down"
                sh "docker-compose up -d"
            }
        }
    }
}