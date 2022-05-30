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
                    steps {
                        dir ("todo-list-shareable-frontend"){
                          sh "npm run test:cov"
                        }
                    }
                }
                stage("Unit Test Front End"){
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
                sh "docker-compose --env-file environments/test-manual.env down"
                sh "docker-compose --env-file environments/test-manual.env up -d"
            }
        }
        stage("Run in Development Environment") {
            steps{
            echo "1"
                sh "docker-compose down"
                sh "docker-compose up -d"
            }
        }
    }
}