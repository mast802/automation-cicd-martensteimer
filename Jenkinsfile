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
                cd frontend-tests/
                npm install
                npm run cypress:frontend
               '''
               archiveArtifacts allowEmptyArchive: true, artifacts: 'frontend-tests/cypress/videos/**', followSymlinks: false
               publishHTML([
                   allowMissing: false, 
                    alwaysLinkToLastBuild: false, 
                    keepAll: false, 
                    reportDir: 'frontend-tests/mochawesome-report', 
                    reportFiles: 'mochawesome.html', 
                    reportName: 'Frontend testresult', 
                    reportTitles: ''])
            }
        }
        stage('Backend tests') {
            steps {
               sh '''
                cd backend-tests/
                npm install
                npm run cypress:backend
               '''
               archiveArtifacts allowEmptyArchive: true, artifacts: 'backend-tests/cypress/videos/**', followSymlinks: false
               publishHTML([
                   allowMissing: false, 
                    alwaysLinkToLastBuild: false, 
                    keepAll: false, 
                    reportDir: 'backend-tests/mochawesome-report', 
                    reportFiles: 'mochawesome.html', 
                    reportName: 'Backend testresult', 
                    reportTitles: ''])
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