pipeline {
    agent any
    stages {
        stage('Deploy/build application') {
            steps {
               sh '''
                echo 'Application deployed successfully!'
               '''
            }
        }
        stage('Frontend tests') {
            steps {
               sh '''
                cd frontend-test/
                npm install
                npm run cypress:run

               '''
            }
        }
        stage('Backendtests') {
            steps {
               sh 'pwd'
               sh 'ls -lart' 
            }
        }
        stage('Performance tests') {
            steps {
               sh 'pwd'
               sh 'ls -lart' 
            }
        }
    }

}