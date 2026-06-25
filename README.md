# Magic Translation Pro

> 为 [SillyTavern](https://github.com/SillyTavern/SillyTavern) 打造的聊天翻译扩展——用 LLM 实时翻译对话，支持自定义 API 和翻译风格。

---

## 📦 安装

SillyTavern → Extensions → Install Extension
```
https://github.com/bmen25124/SillyTavern-Magic-Translation
```

或手动克隆到 `SillyTavern/data/default-user/extensions/`，文件夹名改为 `Magic-Translation-Pro`。

---

## 🚀 快速上手

1. 安装后在扩展列表中启用 **Magic Translation Pro**
2. 打开设置面板，填写你的 **API URL** 和 **API Key**
3. 点击模型旁的 **🔄** 按钮拉取可用模型列表，或手动输入模型名
4. 选择目标语言，点击消息上的 🌐 按钮手动翻译，或开启自动模式

---

## ✨ 功能

### 双方向翻译

- **AI 回复** — 翻译后通过 `display_text` 显示，原文保留不受影响，点编辑能看到原始内容
- **用户输入** — 翻译后直接替换消息文本，LLM 收到的是翻译后的内容

### 两个独立的目标语言

| 语言 | 说明 |
|------|------|
| **Display Language** | AI 回复显示成什么语言 |
| **Input Language** | 你的消息翻译成什么语言再发给 LLM |

例如：写中文 → 翻译成英文发给 LLM → LLM 回英文 → 界面显示中文翻译。

### 自定义翻译风格

翻译提示词完全可自定义，用 `{{text}}` 和 `{{language}}` 占位。可以指定语气、风格、术语偏好。

### 自动翻译模式

| 模式 | 说明 |
|------|------|
| None | 手动点击 🌐 翻译 |
| Translate responses | AI 每条回复自动翻译 |
| Translate inputs | 你每条输入自动翻译后发送 |
| Both | 双向自动翻译 |

### 灵活配置

- 直接填写 API URL + Key，不依赖 ST 的 Connection Profile
- 支持所有 OpenAI 兼容 API（OpenAI、DeepSeek、Groq、vLLM 等）
- 一键拉取可用模型列表
- 界面语言支持中/英文切换

---

## ⚙️ 设置

| 设置项 | 说明 |
|--------|------|
| API URL | LLM API 地址，如 `https://api.openai.com/v1` |
| API Key | API 密钥 |
| Model | 模型名，可手动输入或点 🔄 拉取列表 |
| Display Language | AI 回复的显示语言 |
| Input Language | 用户输入的翻译目标语言 |
| Auto Mode | 自动翻译模式 |
| Translation Prompt | 自定义翻译提示词 |

---

## 🔑 推荐的 API

| 服务 | 建议模型 | 说明 |
|------|----------|------|
| OpenAI | `gpt-4o-mini` | 便宜实惠，翻译质量稳定 |
| DeepSeek | `deepseek-chat` | 性价比极高 |
| Google Gemini | `gemini-2.5-flash` | 速度快，价格低 |
| OpenRouter | 任意模型 | 聚合平台，选择灵活 |

---

---

# 📖 English

> A chat translation extension for [SillyTavern](https://github.com/SillyTavern/SillyTavern) — real-time translation of conversations using LLMs, with custom API and translation style support.

---

## 📦 Installation

SillyTavern → Extensions → Install Extension
```
https://github.com/bmen25124/SillyTavern-Magic-Translation
```

Or clone manually into `SillyTavern/data/default-user/extensions/`, rename folder to `Magic-Translation-Pro`.

---

## 🚀 Quick Start

1. Enable **Magic Translation Pro** in the extensions list after installation
2. Open settings, fill in your **API URL** and **API Key**
3. Click the **🔄** button next to the model field to fetch available models, or type the model name manually
4. Select a target language, click the 🌐 button on any message to translate, or enable auto mode

---

## ✨ Features

### Bidirectional Translation

- **AI Responses** — Translation shown via `display_text`; original text preserved. Click edit to see the source
- **User Inputs** — Message text is replaced with the translation before sending to the LLM

### Two Independent Target Languages

| Language | Description |
|----------|-------------|
| **Display Language** | Language to display AI responses in |
| **Input Language** | Language to translate your messages into before sending |

Example: Write in Chinese → translated to English for the LLM → LLM replies in English → shown in Chinese.

### Custom Translation Style

Fully customizable prompt with `{{text}}` and `{{language}}` placeholders. Control tone, style, and terminology.

### Auto Mode

| Mode | Description |
|------|-------------|
| None | Manual 🌐 click to translate |
| Translate responses | Auto-translate every AI response |
| Translate inputs | Auto-translate every user message before sending |
| Both | Auto-translate both directions |

### Flexible Configuration

- Direct API URL + Key input — no Connection Profile dependency
- Supports any OpenAI-compatible API (OpenAI, DeepSeek, Groq, vLLM, etc.)
- One-click model list fetch
- UI language supports Chinese/English toggle

---

## ⚙️ Settings

| Setting | Description |
|---------|-------------|
| API URL | LLM API endpoint, e.g. `https://api.openai.com/v1` |
| API Key | API authentication key |
| Model | Model name — type manually or click 🔄 to fetch list |
| Display Language | Language for AI response display |
| Input Language | Language to translate user input into |
| Auto Mode | Auto translation mode |
| Translation Prompt | Custom translation prompt template |

---

## 🔑 Recommended APIs

| Service | Suggested Model | Notes |
|---------|-----------------|-------|
| OpenAI | `gpt-4o-mini` | Cheap and reliable |
| DeepSeek | `deepseek-chat` | Great value |
| Google Gemini | `gemini-2.5-flash` | Fast, low cost |
| OpenRouter | Any model | Aggregator, flexible |
