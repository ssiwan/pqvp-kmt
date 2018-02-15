# terraform plan \
#   -var 'access_key=foo' \
#   -var 'secret_key=bar'

variable "region" {
  default = "us-west-1"
}

variable "additional_manager_nodes" {
  description = "Additional number of manager nodes (swarm always created with at least 1 manager)"
  default     = "0"
}

variable "num_nodes" {
  description = "Number of worker nodes"
  default     = "0"
}

variable "availability_zones" {
  description = "Name of the availability zones to use"
  default     = ["us-west-1b"]
}

variable "private_key_name" {
  description = "Name of private_key"
  default     = "pqvp-kmt"
}

variable "private_key_path" {
  description = "Path to file containing private key"
  default     = "~/.ssh/pqvp-kmt.pem"
}

variable "instance_type" {
  description = "AWS Instance size"
  default     = "t2.micro"
}

variable "environment" {
  description = "Environment type"
  default     = "staging"
}

variable "git_commit" {
  description = "Git Commit Short ID"
  default     = ""
}

variable "git_branch" {
  description = "Git Branch"
  default     = ""
}

variable "build" {
  description = "Build Number"
  default     = ""
}
