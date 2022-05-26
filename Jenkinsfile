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
                        dif ("todo-list-shareable-backend"){
                            sh "docker build ."
                        }
                        //sh "docker-compose build nestjs_backend"
                    }
                }
                stage ("Build Front End") {
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
                    echo "run test be"
                        //sh "npm run test"
                    }
                }
                stage("Unit Test Front End"){
                    steps {
                    echo "test fE"
                      //  sh "npm run test:unit"
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