pipeline {
    agent any

        triggers {
            pollSCM('* * * * *')
        }

        tools {
            nodejs "Node"
        }

    stage("Build project") {
        steps{
            dir("todo-list-shareable-backend"){
                docker build
            }
        }
    }
}