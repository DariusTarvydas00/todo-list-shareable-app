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
                    sh "docker build ."
                }
            }
        }
        stage("Run") {
            steps{
                dir("todo-list-shareable-backend"){
                    sh "docker run"
                }
            }
        }
    }
}