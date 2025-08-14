---
title: 'Docker Basics for Beginners'
published: 2025-01-20
description: Learn how to use Docker to build and run container images on your local environment. 
tags: [ 'linux', 'containers' ]
cover_image: 
  src: 'https://cdn.erikaheidi.com/blog/dev-env-docker.png'
  alt: 'Banner with post title'
---

Docker is a software used to build and run [containers](https://edu.chainguard.dev/software-security/what-are-containers/). Unlike virtual machines, containers do not emulate an entire operating system, relying on the host OS to provide an isolated filesystem that consumes less resources than traditional VMs, but still provide a fully functional runtime based on a chosen operating system.

![The container model as a high-level overview](https://cdn.erikaheidi.com/blog/container-model-graph.png)

The build steps necessary to (re)create a Docker container image are defined in a [Dockerfile](https://docs.docker.com/engine/reference/builder/#dockerfile-reference). This file may contain special instructions to install packages, create users, and run arbitrary system commands.

Container images can be hosted in a remote registry that allow images to be pulled from different locations. The default Docker registry is [Docker Hub](https://hub.docker.com), but there are many others. When using images from registries other than Docker Hub, you'll need to specify the registry URL along the image identifier.


## Pulling Images from a Registry
The `pull` command is used to pull images from a remote registry. It is not mandatory to run this command before running an image, as the pull will happen automatically. However, if you already have a local copy of an image, you'll need to run the `pull` command in order to obtain an updated version of the image. 

```shell
docker pull registry/image
```
For example, this will pull the [PHP Chainguard Image](https://edu.chainguard.dev/chainguard/chainguard-images/reference/php) to your local machine:
```shell
docker pull cgr.dev/chainguard/php
```
You should see output similar to this:
```shell
Using default tag: latest
latest: Pulling from chainguard/php
1e4853eb9712: Pull complete 
Digest: sha256:387acb900179de11ca5a56c3ebbb6f29d2df88cb488d50fc9736ab085f27520d
Status: Downloaded newer image for cgr.dev/chainguard/php:latest
cgr.dev/chainguard/php:latest
```

## Running Containers
The `run` command is used to execute the entry point defined by your image Dockerfile. Depending on the image and how it is used, you may need to provide additional parameters to the command.

```shell
docker run registry/image
```
For example, the following command will execute the PHP image we pulled in the previous section, with the `--version` flag to obtain the PHP version:

```shell
docker run cgr.dev/chainguard/php --version
```
```shell
PHP 8.2.12 (cli) (built: Nov 15 2023 15:30:03) (NTS)
Copyright (c) The PHP Group
Zend Engine v4.2.12, Copyright (c) Zend Technologies
```

### Running Containers in Interactive Mode
Many (maybe even most) container images run a single command and are terminated afterwards. It is the case with regular PHP images that are meant to run scripts. There is no interaction once the process of execution is initiated.

Some images will require some type of interaction from the user. That is often the case with images that run an interactive application such as `bash`. In those cases, you'll need to provide the `-it` argument when running Docker:

```shell
docker run -it registry/image
```
For example, this will execute the [wolfi-base](https://edu.chainguard.dev/chainguard/chainguard-images/reference/wolfi-base) image and land you in a shell inside the newly created container:

```shell
docker run -it cgr.dev/chainguard/wolfi-base
```

### Running Ephemeral Containers
To remove a container immediately after it is terminated, add the `-rm` parameter to the `docker run` command:

```shell
docker run --rm registry/image
```
This is especially useful for running quick commands that don't generate relevant output that needs to be shared or persisted, as with our first example that checked for the PHP version. We could rewrite that command to the following:

```shell
docker run --rm cgr.dev/chainguard/php --version
```

And this will prevent Docker from keeping the state of this container, which is good for saving resources.

## Checking Container Status
To have a full list of active and inactive containers currently registered in the system, run:

```shell
docker ps -a
```
_Note: When the `-a` parameter is not provided, Docker will list only containers that are currently running._

You should get output similar to this:

```shell
CONTAINER ID   IMAGE                    COMMAND                CREATED          STATUS                      PORTS     NAMES
26272c21399c   cgr.dev/chainguard/php   "/bin/php --version"   10 minutes ago   Exited (0) 10 minutes ago             musing_hermann
```

The first time we executed the command to obtain the PHP version of the container, we didn't use the `--rm` flag. That's why the container is listed here - it's inactive, but its state is saved. 

## Using Volume Shares
When running development environments, it's crucial that you're able to edit your code in your local machine, while being able to execute and test it inside the container. To enable that, you can use [Docker volumes](https://docs.docker.com/storage/volumes/). Volumes are used to share the contents of a predefined path in your host machine to a location inside the container.

The following command will create a volume sharing the contents of LOCAL_FOLDER in the host machine with REMOTE_FOLDER inside the container.

```shell
docker run -v LOCAL_FOLDER:REMOTE_FOLDER registry/image
```

### Use Case and Example

Let's say you want to run a PHP script without having to install PHP (could be any other language). You want to be able to make changes to the file and test it in an isolated environment.

Create a folder in your home directory for this demo:

```shell
mkdir ~/docker-demo
cd ~/docker-demo
```

Next, create a new file and copy the following contents to it:

```php
<?php
echo "Testing Docker PHP Dev Env";
print_r($argv);
```
Save the file as `demo.php`.

Now you can use a Docker image to run this code. The following command will create an ephemeral container to execute code shared inside the container:

```shell
docker run --rm -v ${PWD}:/app cgr.dev/chainguard/php demo.php
```

The `${PWD}` shell variable contains the current directory location. The volume will share the current directory with the `/app` location in the container, which is the workdir (the default directory) for that image. With the files shared in the default workdir, you can refer to the script simply as `demo.php`.

## Purging Docker Resources

Some resources are not removed once a container is terminated; that is the case with named volumes. Images can also leave a big footprint in your system, think gigabytes of space from unused layers and old images.

The `prune` command can be used to clean up unused resources and free up space occupied by them. For instance, to purge unused volumes:

```shell
docker volume prune
```
```
WARNING! This will remove anonymous local volumes not used by at least one container.
Are you sure you want to continue? [y/N] 
```

The same logic applies to `images` and `networks`. To perform a complete system purge, run:

```shell
docker system prune
```
You should get a warning message confirming what is going to be removed. Type `y` to confirm.

```shell
WARNING! This will remove:
  - all stopped containers
  - all networks not used by at least one container
  - all dangling images
  - all dangling build cache

Are you sure you want to continue? [y/N] 
```

Unused resources accumulate with time, so it's good to run this command every once in a while. Depending on how you're using Docker, you may be able to free up a lot of disk space with this command.

## Resources to Learn More
The [What are Containers?](https://edu.chainguard.dev/software-security/what-are-containers/) guide from Chainguard Academy has a nice high level overview of containers and images. For more technical specifications and reference docs, check the official [Docker Documentation](https://docs.docker.com/get-started/overview/) which covers all components in the Docker container ecosystem. 

For considerations about container security, check this Academy guide on [Selecting a Base Image](https://edu.chainguard.dev/software-security/selecting-a-base-image/) and the introduction to [Software Supply Chain Security](https://edu.chainguard.dev/software-security/what-is-software-supply-chain-security/), which should give you a better understanding of security considerations when bringing your images to Production.

## Bonus: Docker Cheat Sheet
![Docker Cheat Sheet](https://cdn.erikaheidi.com/blog/docker-cheat-sheet.png)
