provider "aws" {
  region = "ap-south-1"
}

# Security Group
resource "aws_security_group" "nodejs_sg" {
  name = "nodejs-sg-new"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# EC2 Instance
resource "aws_instance" "nodejs_server" {
  ami                    = "ami-0f5ee92e2d63afc18"  # Ubuntu 22.04 LTS ap-south-1
  instance_type          = "t2.micro"
  key_name               = "aws-key"
  vpc_security_group_ids = [aws_security_group.nodejs_sg.id]

  tags = {
    Name = "nodejs-server"
  }
}

output "instance_public_ip" {
  value = aws_instance.nodejs_server.public_ip
}