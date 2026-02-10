import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name = 'Morgan Martin';
  title = 'Software Developer'; 
  currentYear = new Date().getFullYear();
  profileImage = 'assets/images/1770637885478.jpg'; 

  // app.ts
introPart1 = 'I am a full-stack developer focused on building reliable software solutions for complex industrial and offshore environments. I specialize in Python-based automation and system optimization.';
introPart2 = 'I am currently seeking a year-long placement in software engineering or system development where I can apply my expertise to real-world, mission-critical projects.';

about = 'I am a passionate creator focused on solving problems through code.';

  linkedin = 'https://linkedin.com/in/morgan-m-martin';
  github = 'https://github.com/MorganMart1n';

  techStack = [
    { category: 'Languages', items: ['Java', 'Python', 'TypeScript', 'JavaScript', 'PHP', 'SQL'] },
    { category: 'Frameworks', items: ['JavaFX', 'Angular', 'React/React Native', 'NodeJS', 'Express', 'Bootstrap'] },
    { category: 'Tools', items: ['Git', 'Figma', 'Linux Cli', 'Powershell', 'Docker'] },
    { category: 'Technical Concepts', items: ['Workflow Optimisation', 'REST APIs'] }
  ];

  getTotalSkills(): number {
    return this.techStack.reduce((acc, group) => acc + group.items.length, 0);
  }
}