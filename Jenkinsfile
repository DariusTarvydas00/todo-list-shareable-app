pipeline {
    agent any

        triggers {
            pollSCM('H * * * *')
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
                    when {
                        anyOf {
                            changeset "todo-list-shareable-backend/src/**"
                            changeset "todo-list-shareable-backend/test/**"
                        }
                    }
                    steps {
                        dir ("todo-list-shareable-backend"){
                          sh "npm run test"
                        }
                    }
                }
                stage("Unit Test Front End"){
                    when {
                        anyOf {
                        changeset "todo-list-shareable-frontend/src/**"
                        changeset "todo-list-shareable-frontend/tests/**"
                        }
                    }
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
                sh "docker-compose --env-file environments/test-manual.env down"
                sh "docker-compose --env-file environments/test-manual.env up -d nestjs_backend vue_frontend"
            }
        }
        stage("Deliver to registry") {
            steps{
                sh "docker-compose down --env-file environments/test-manual.env push"
            }
        }
        stage("Grafana"){
            steps {
                dir("grafana"){
                    sh 'docker-compose -f docker-compose-graf.yml up -d influxdb grafana'
                    sh 'docker-compose -f docker-compose-graf.yml run k6 run //scripts//ewoks.js'
                }
            }
        }
    }
}