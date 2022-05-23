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
            parallel{
                stage("Build back-end"){
                    when {
                        anyOf {
                            dir("todo-list-shareable-backend"){
                                changeset "src/*"
                                changeset "test/*"
                            }
                        }
                        steps {
                            sh "docker-compose build nestjs_backend
                        }
                    }
                }
            }
        }
        stage("Run") {
            steps{
                sh "docker-compose up -d"
            }
        }
    }
}