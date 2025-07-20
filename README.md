# ChequeTracker AI 🤖📱

<div align="left">
  <img src="assets/app-logo.png" alt="ChequeTracker AI Logo" width="400" height="400">
</div>

A smart mobile application that uses AI to digitally track and manage cheques through intelligent document processing and financial analytics.

## 🎯 Real-World Problem

Paper cheques are still widely used in many industries, and tracking them manually is error-prone and inefficient. Small businesses and individuals lose track of uncashed cheques, miss deposit deadlines, and struggle with financial organization. ChequeTracker AI solves this by combining modern AI with practical financial management.

## ✨ Smart Features

### 🤖 AI-Powered Document Processing

- **Intelligent OCR**: Advanced text extraction using Hugging Face models
- **Document Question Answering**: AI understands cheque structure and extracts specific fields
- **Token Classification**: Smart field-level parsing (payee, amount, date, bank)
- **Auto-correction**: AI validates and suggests corrections for extracted data

### 📊 Financial Intelligence

- **Smart Status Tracking**: Pending, deposited, cleared with automatic reminders
- **Financial Analytics**: Track patterns, amounts, and cheque history
- **Uncashed Cheque Alerts**: Never miss a deposit deadline again
- **Monthly/Yearly Reports**: Visualize your financial activity

### 🔄 Modern Data Management

- **Local-First Storage**: SQLite for offline functionality
- **Cloud Sync**: Optional Supabase integration for backup and multi-device sync
- **Export Capabilities**: CSV, PDF reports for accounting
- **Search & Filter**: Find cheques instantly with smart search

## 🛠️ Modern Tech Stack

### Frontend
- **React Native + Expo** - Cross-platform mobile development
- **React Navigation** - Smooth navigation experience
- **Expo Camera & Image Manipulator** - Professional photo capture

### AI & Processing
- **Hugging Face Transformers** - Document Question Answering
- **Google Vision API** - Primary OCR with AI fallback
- **Token Classification Models** - Smart field extraction

### Backend & Data
- **SQLite** - Local database for offline-first approach
- **Supabase** - Cloud sync and backup (optional)
- **AsyncStorage** - App settings and preferences

### Development & Deployment
- **Expo Development Build** - Custom native modules
- **GitHub Actions** - CI/CD pipeline
- **Expo Application Services** - Build and deployment

## 📱 Development Phases

🚧 **Smart Development Approach**

**Phase 1: Foundation** ✅ Partial
- ✅ Project architecture with AI considerations
- 🔄 React Native + Expo setup
- ⏳ Navigation and UI foundation

**Phase 2: Core AI Integration**
- ⏳ Hugging Face model integration (free tier)
- ⏳ Document Question Answering implementation
- ⏳ Smart camera and image processing

**Phase 3: Financial Intelligence**
- ⏳ SQLite database with smart schema
- ⏳ Analytics and reporting features
- ⏳ Status tracking and notifications

**Phase 4: Cloud & Polish**
- ⏳ Optional Supabase cloud sync
- ⏳ Export functionality and UX polish
- ⏳ Performance optimization

## 🎨 Smart User Flow

AI-enhanced experience for maximum efficiency:

1. **📸 Smart Capture**: AI-guided photo capture with quality validation
2. **🤖 AI Processing**: Document QA extracts structured data automatically
3. **✏️ Smart Review**: AI suggests corrections and validates data
4. **💾 Intelligent Storage**: Auto-categorization and smart organization
5. **📊 Analytics**: Track patterns and get insights about your finances

## 📊 Portfolio Value

**Resume Impact:**
> "Built a mobile app using Hugging Face AI models for document processing, combining OCR, NLP, and financial analytics to solve real-world cheque management problems"

**Key Technical Highlights:**
- 🤖 **AI Integration**: Hugging Face Document QA and Token Classification
- 📱 **Mobile Development**: React Native with modern patterns
- 🔄 **Full-Stack**: Local + Cloud data management
- 📊 **Data Analytics**: Financial insights and reporting
- 🎯 **Real-World Problem**: Practical financial management solution

## 🔒 Privacy & Security

**Local-First Approach:**
- Primary data storage on device (SQLite)
- Optional cloud sync with user control
- No sensitive data transmitted without explicit consent
- Secure handling of financial documents

**Cost-Effective Development:**
- Hugging Face free tier for AI models
- Supabase free tier for cloud features
- Expo free tier for development and deployment

---

**🎯 Learning Goals**: Modern React Native development, AI model integration, practical financial app architecture, and portfolio-worthy project execution.

_Last updated: July 2025_
