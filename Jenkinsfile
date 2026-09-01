pipeline {

    agent any

    environment {
        PORT = '3000'
        DB_HOST = 'postgres'
        DB_PORT = '5432'
        DB_NAME = 'student_db'
        DB_USER = 'postgres'
        DB_PASSWORD = 'postgres123'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Prepare Env') {
            steps {
                writeFile file: '.env', text: """PORT=${PORT}
DB_HOST=${DB_HOST}
DB_PORT=${DB_PORT}
DB_NAME=${DB_NAME}
DB_USER=${DB_USER}
DB_PASSWORD=${DB_PASSWORD}
"""
            }
        }

        stage('Build') {
            steps {
                sh 'docker compose build'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker compose up -d'
            }
        }

        stage('Verify') {
            steps {
                sh 'docker compose ps'
            }
        }
    }
}
