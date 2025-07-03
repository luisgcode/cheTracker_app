# ChequeTracker 📱

A React Native mobile application for digitally tracking and managing cheques through intelligent image processing.

## 🎯 Problem Statement

Managing physical cheques can be challenging - they're easy to lose, difficult to organize, and hard to track. ChequeTracker solves this by allowing users to capture cheque photos and automatically extract key information for digital storage and management.

## ✨ Features

### Core Functionality
- **Photo Capture**: Take high-quality photos of cheques using device camera
- **OCR Processing**: Automatically extract key information from cheque images
- **Data Storage**: Securely store cheque details locally on device
- **Digital Organization**: View, search, and manage all tracked cheques

### Smart Data Extraction
- Payee name recognition
- Amount detection and parsing
- Date identification
- Bank information extraction
- Manual editing capabilities for OCR corrections

### Management Tools
- Cheque status tracking (pending, deposited, cleared)
- Search and filter functionality
- Export capabilities
- Photo gallery with zoom

## 🛠️ Technology Stack

- **Framework**: React Native with Expo
- **Language**: JavaScript (ES6+)
- **Navigation**: React Navigation
- **Database**: SQLite for local storage
- **OCR**: Google Vision API / AWS Textract
- **Image Processing**: Expo Camera & Image Manipulator

## 📱 Development Status

🚧 **Currently in Development**

This project is actively being developed with a phased approach:

- ✅ Project planning and architecture design
- 🔄 Development environment setup
- ⏳ Core UI development
- ⏳ OCR integration
- ⏳ Data storage implementation
- ⏳ Advanced features
- ⏳ Testing and optimization

## 🎨 User Experience

Simple, intuitive interface designed for quick cheque capture and management:

1. **Capture**: Point camera at cheque and take photo
2. **Process**: App automatically extracts key information
3. **Review**: Verify and edit extracted data if needed
4. **Store**: Save cheque information for future reference
5. **Manage**: Track status and access cheque history

## 📊 Success Metrics

- OCR accuracy rate > 80%
- Seamless photo capture experience
- Reliable data persistence
- Intuitive user interface
- Comprehensive cheque management

## 🔒 Privacy & Security

- All data stored locally on device
- No personal information transmitted without user consent
- Secure handling of financial document images
- Optional data backup and export features

---

**Note**: This is an ongoing project focused on learning React Native development patterns, mobile OCR implementation, and creating practical solutions for everyday problems.

*Last updated: July 2025*