# Node.js Deployment Automation with Terraform & Ansible

Automated infrastructure provisioning and application deployment using Terraform and Ansible.

## Architecture

- **Terraform**: Provisions AWS EC2 instance with security groups
- **Ansible**: Deploys Node.js application as systemd service
- **Target**: Ubuntu 22.04 LTS on AWS

## Prerequisites

- AWS CLI configured
- Terraform installed
- Ansible installed
- AWS key pair created (`aws-key`)

## Quick Start

### 1. Deploy Infrastructure
```bash
cd terraform
terraform init
terraform plan
terraform apply
```

### 2. Deploy Application
```bash
cd ../ansible
ansible-playbook -i inventory roles/playbook.yml
```

## What It Does

1. **Infrastructure**: Creates EC2 instance with security groups (SSH:22, App:3000)
2. **Application**: Installs Node.js, clones app from GitHub, configures systemd service
3. **Service**: Runs Node.js app as managed service with auto-restart

## Files Structure

```
├── terraform/
│   └── main.tf              # AWS infrastructure
├── ansible/
│   └── roles/
│       ├── playbook.yml     # Main playbook
│       └── nodejs/
│           ├── tasks/       # Installation tasks
│           ├── handlers/    # Service handlers
│           └── templates/   # Systemd service template
└── README.md
```

## Access

After deployment, access your Node.js app at: `http://<EC2_PUBLIC_IP>:3000`

## Cleanup

```bash
cd terraform
terraform destroy
```
