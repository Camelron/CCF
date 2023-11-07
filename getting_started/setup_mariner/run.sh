#!/bin/bash
# Copyright (c) Microsoft Corporation. All rights reserved.
# Licensed under the Apache 2.0 License.

set -x

sudo dnf check-update -y
sudo dnf install ansible -y
ansible-playbook "$@"
