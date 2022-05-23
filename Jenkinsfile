pipeline {
    agent any

        triggers {
            pollSCM('* * * * *')
        }

        tools {
            nodejs "Node"
        }

    stages{
        stage("Build project") {
            steps{
                dir("todo-list-shareable-backend"){
                    sh "docker build -t nestjs_backend ."
                }
            }
        }
        stage("Run") {
            steps{
                dir("todo-list-shareable-backend"){
                    sh "docker stop nestjs_backend"
                    sh "docker run -dp 3000:3000 nestjs_backend"
                }
            }
        }
    }
}