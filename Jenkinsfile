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
                    when {
                        anyOf {
                            dir("todo-list-shareable-frontend"){
                                changeset "src/**"
                                changeset "test/**"
                            }
                        }
                    }
                    steps {
                        sh "docker-compose build nestjs_backend"
                    }
                }
                stage ("Build Front End") {
                    steps {
                      //  dir ("todo-list-shareable-frontend"){
                       //     sh "docker build ."
                      //  }
                        sh "docker-compose build vue_frontend"
                    }
                }
            }
        }
        stage("Unit Test"){
            parallel {
                stage("Unit Test Back-End") {
                    steps {
                        dir ("todo-list-shareable-frontend"){
                          //  sh "npm run test"
                          echo "tessting"
                        }
                    }
                }
                stage("Unit Test Front End"){
                    steps {
                        dir ("todo-list-shareable-frontend"){
                           // sh "npm run test:unit"
                           echo "testing"
                        }
                    }
                }
            }
        }
        stage("Setup manual test env"){
            steps{
            echo "test"
                //sh "docker-compose --env-file environments/test-manual.env down"
                //sh "docker-compose --env-file environments/test-manual.env up -d"
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