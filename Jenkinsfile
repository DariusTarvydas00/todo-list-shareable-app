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
                            changeset "todo-list-shareable-backend/src/**"
                            changeset "todo-list-shareable-backend/test/**"
                        }
                    }
                    steps {
                        sh "docker-compose build nestjs_backend"
                    }
                }
                stage ("Build Front End") {
                    when {
                        anyOf {
                            changeset "todo-list-shareable-frontend/src/**"
                            changeset "todo-list-shareable-frontend/tests/**"
                        }
                    }
                    steps {
                        sh "docker-compose build vue_frontend"
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
                        dir ("todo-list-shareable-backend"){
                          sh "npm run test:cov"
                        }
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
                        dir ("todo-list-shareable-frontend"){
                            sh "npm run test:unit"
                        }
                    }
                }
            }
        }
        stage("Setup manual test env"){
            steps{
                echo "test"
                sh "docker-compose --env-file down"
                sh "docker-compose --env-file environments/test-manual.env up -d"
                sh 'docker-compose run k6 run /loadtests/ewoks.js'
            }
        }
        stage("Deliver to registry") {
            steps{
                sh "docker-compose down --env-file environments/test-manual.env push"
            }
        }
        stage("Deliver to production") {
            steps{
                build job: "ToDoList/02 - Deploy to production", wait: false
            }
        }
    }
}