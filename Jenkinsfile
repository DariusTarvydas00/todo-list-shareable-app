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
            parallel {
                stage("Build back-end") {
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
            }
        }
        stage("Run") {
            steps{
            echo "asd"
               // sh "docker-compose up -d"
            }
        }
    }
}