pipeline {
    agent any

    triggers {
        pollSCM('* * * * *')
    }

    tools {
        nodejs "Node"
    }

    stages {
        stage("Build project"){
        //parallel {
            //stage("Build backend"){
                //when {
                    //anyOf{
                    //    dir("todo-list-shareable-backend"){
                    //        changeset "src/*"
                    //        changeset "tests/*"
                    //    }
                    //}
                    //steps {
                      //  dir("todo-list-shareable-backend"){
                     //      sh "docker build ."
                      //  }
                   // }
                //}
           // }
        //}
            steps {
               dir("todo-list-shareable-backend"){
                                       sh "docker build ."
                                    }
                sh "make build-dev"
                sh "make start"
                //sh "docker-compose build --target development nestjs"
                // docker compose build/up/down
            }
        }
        stage("Unit Test"){
            parallel{
                stage("Unit test backend"){
                    steps{
                        echo 'asd'
                    }
                }
            }
        }
    }
}