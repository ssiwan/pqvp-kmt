region = "us-west-1"
additional_manager_nodes = "0"
num_nodes = "1"
availability_zones = ["us-west-1b"]
private_key_name = "pqvp-kmt"
private_key_path = "~/.ssh/pqvp-kmt.pem"
instance_type = "t2.micro"
environment = "production"
bucket = "pqvp-kmt-state-store"
key = "tf/production/terraform.tfstate"
region = "us-west-1"