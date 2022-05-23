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
                    docker build
                }
            }
        }
    }
}