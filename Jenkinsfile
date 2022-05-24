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
                    steps {
                        sh "docker-compose build nestjs_backend"
                    }
                }
                stage("Build Front End"){
                    steps {
                    echo "build front-end"
                        sh "docker-compose build vue_frontend"
                    }
                }
            }
        }
        stage("Unit Test"){
            parallel {
                stage("Unit Test Back-End") {
                    steps {
                        sh "npm run test"
                    }
                }
                stage("Unit Test Front End"){
                    steps {
                        sh "npm run test:unit"
                    }
                }
            }
        }
        stage("Run") {
            steps{
                sh "docker-compose down"
                sh "docker-compose up -d"
            }
        }
    }
}