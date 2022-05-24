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
            sh "docker-compose -f docker-compose-dev.yml build"
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
        stage("Run in Development Environment") {
            steps{
                sh "docker-compose down"
                sh "docker-compose up -d"
            }
        }
    }
}