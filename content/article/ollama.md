---
title: Run LLMs Locally using Ollama
description: A guide to the Ollama framework to try out LLMs locally
slug: ollama
date: 01/01/2025
author: Naveen Karthik
image: https://raw.githubusercontent.com/tanush-em/adeptus-assets/master/uploads/ART004/title.png
tags: ["LLM","SLM","Setup", "Beginner"]
---

Running large language models (LLMs) like ChatGPT and Claude usually involves sending data to servers managed by OpenAI and other AI model providers. While these services are secure, some businesses prefer to keep their data entirely offline for greater privacy.

Using LLMs on local systems is becoming increasingly popular thanks to their improved privacy, control, and reliability. Sometimes, these models can be even more accurate and faster than ChatGPT.

## Why Run LLMs Locally?

Running LLMs locally involves deploying advanced AI models directly on personal or organizational hardware, rather than relying on cloud-based services. This approach offers several advantages:

- **Data Privacy**: Processing data in-house ensures sensitive information remains confidential
- **Reduced Latency**: Local execution eliminates network communication delays
- **Customization and Control**: Enables fine-tuning without third-party constraints
- **Cost Efficiency**: Bypasses subscription fees and usage costs

## Introduction to Ollama

Ollama is an open-source tool that runs large language models directly on a local machine. It's particularly appealing to AI developers, researchers, and businesses concerned with data control and privacy.

By running models locally, you maintain full data ownership and avoid cloud storage security risks. Offline AI tools like Ollama also help reduce latency and reliance on external servers.

## Setup Guide

### 1. Installation

First, download and install Ollama from [ollama.com/download](https://ollama.com/download)

![Ollama Installation](https://raw.githubusercontent.com/tanush-em/adeptus-assets/master/uploads/ART004/pic1.png)

### 2. Initialize Server

After installation, initiate the Ollama server and CLI in your local system:

![Server Initialization](https://raw.githubusercontent.com/tanush-em/adeptus-assets/master/uploads/ART004/pic2.png)
![CLI Initialization](https://raw.githubusercontent.com/tanush-em/adeptus-assets/master/uploads/ART004/pic3.png)

### 3. Access Ollama

Open Command Prompt to access Ollama:

![Command Prompt Access](https://raw.githubusercontent.com/tanush-em/adeptus-assets/master/uploads/ART004/pic5.png)

### 4. Model Selection

Browse the [Ollama Model Library](https://ollama.com/library) and pull your chosen model:

```bash
ollama pull <Model_name>
```

![Model Pull Example](https://raw.githubusercontent.com/tanush-em/adeptus-assets/master/uploads/ART004/pic6.png)

### 5. Running Models

Use the run command to interact with your model:

```bash
ollama run <Model_name>
```

![Model Running Example](https://raw.githubusercontent.com/tanush-em/adeptus-assets/master/uploads/ART004/pic8.png)

### 6. Code Integration

You can integrate these LLMs into your codebase using libraries like langchain or llama_index:

```python
# Example Integration
![Code Integration](https://raw.githubusercontent.com/tanush-em/adeptus-assets/master/uploads/ART004/Code.png)
```

![Integration Results](https://raw.githubusercontent.com/tanush-em/adeptus-assets/master/uploads/ART004/Coderes.png)

### 7. Model Management

List installed models using:

```bash
ollama list
```

![Model List](https://raw.githubusercontent.com/tanush-em/adeptus-assets/master/uploads/ART004/pic7.png)

## CLI Reference Guide

### Basic Commands

1. **Create a model**:
```bash
ollama create mymodel -f ./Modelfile
```

2. **Pull a model**:
```bash
ollama pull llama3.2
```

3. **Remove a model**:
```bash
ollama rm llama3.2
```

4. **Copy a model**:
```bash
ollama cp llama3.2 my-model
```

### Advanced Usage

5. **Multiline input**:
```text
"""Hello,
world!
"""
```

6. **Multimodal models**:
```bash
ollama run llava "What's in this image? /Users/jmorgan/Desktop/smile.png"
```

7. **Process file content**:
```bash
ollama run llama3.2 "Summarize this file: $(cat README.md)"
```

8. **Show model information**:
```bash
ollama show llama3.2
```

![Model Information](https://raw.githubusercontent.com/tanush-em/adeptus-assets/master/uploads/ART004/pic9.png)

9. **List running models**:
```bash
ollama ps
```

10. **Stop running model**:
```bash
ollama stop llama3.2
```

## Customizing Model Responses

### Basic Customization

1. Create a Modelfile:
```bash
FROM ./vicuna-33b.Q4_0.gguf
```

2. Create the model:
```bash
ollama create example -f Modelfile
```

3. Run the model:
```bash
ollama run example
```

### Advanced Customization Example

1. Pull the base model:
```bash
ollama pull llama3.2
```

2. Create a custom Modelfile:
```bash
FROM llama3.2

# set the temperature to 1 [higher is more creative, lower is more coherent]
PARAMETER temperature 1

# set the system message
SYSTEM """
You are Mario from Super Mario Bros. Answer as Mario, the assistant, only.
"""
```

3. Create and run the custom model:
```bash
ollama create mario -f ./Modelfile
ollama run mario
```