import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 's_zanardo92.github.io',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './s_zanardo92.github.io.index.html',
  styleUrls: ['./s_zanardo92.github.io.component.ts']
})
export class BackendDeveloperMainComponent implements OnInit {
  projects = [
    {
      title: 'E-commerce Platform',
      description: 'Developed a scalable back-end for an e-commerce platform using Node.js and MongoDB.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      link: 'https://example.com/ecommerce'
    },
    {
      title: 'Real-time Chat Application',
      description: 'Built a real-time chat application using Socket.io and Express.js.',
      image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      link: 'https://example.com/chat-app'
    },
    {
      title: 'RESTful API for Task Management',
      description: 'Designed and implemented a RESTful API for task management using Python and Django.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
      link: 'https://example.com/task-api'
    }
  ];

  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  constructor() { }

  ngOnInit(): void { }

  onSubmit() {
    console.log('Form submitted', this.contactForm);
    // Here you would typically send the form data to a backend service
    // Reset the form after submission
    this.contactForm = {
      name: '',
      email: '',
      message: ''
    };
  }
}
