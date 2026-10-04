import { Component } from '@angular/core';
import { InfoCard } from '../shared/info-card/info-card';
import { AuthorCard } from '../shared/author-card/author-card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [InfoCard,AuthorCard],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

  stats = [
    {
      icon: `<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M3 6a2 2 0 0 1 2-2h5.532a2 2 0 0 1 1.536.72l1.9 2.28H3V6Zm0 3v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9H3Z"/></svg>`,
      title: '15+',
      description: 'تصنيف'
    },
    {
      icon: `<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M14 4.182A4.136 4.136 0 0 1 16.9 3c1.087 0 2.13.425 2.899 1.182A4.01 4.01 0 0 1 21 7.037c0 1.068-.43 2.092-1.194 2.849L18.5 11.214l-5.8-5.71 1.287-1.31.012-.012Zm-2.717 2.763L6.186 12.13l2.175 2.141 5.063-5.218-2.141-2.108Zm-6.25 6.886-1.98 5.849a.992.992 0 0 0 .245 1.026 1.03 1.03 0 0 0 1.043.242L10.282 19l-5.25-5.168Zm6.954 4.01 5.096-5.186-2.218-2.183-5.063 5.218 2.185 2.15Z" clip-rule="evenodd"/></svg>`,
      title: '50+',
      description: 'كاتب خبير'
    },
    {
      icon: `<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11.5c.07 0 .14-.007.207-.021.095.014.193.021.293.021h2a2 2 0 0 0 2-2V7a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2v11h-2V5a2 2 0 0 0-2-2H5Zm7 4a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1Zm-6 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1ZM7 6a1 1 0 0 1 1-1h3v3H7V6Z" clip-rule="evenodd"/></svg>`,
      title: '500+',
      description: 'مقالة منشورة'
    },
    {
      icon: `<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm9-2a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Z" clip-rule="evenodd"/></svg>`,
      title: '2+ مليون',
      description: 'قارئ شهري'
    }
  ];

  values = [
    {
      icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"/></svg>`,
      title: 'دائماً محدث',
      description: 'أحدث الاتجاهات وأفضل الممارسات'
    },
    {
      icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.419 10.581a3.517 3.517 0 0 0 0-4.965 3.517 3.517 0 0 0-4.965 0 3.517 3.517 0 0 0 0 4.965m4.965 0a3.517 3.517 0 0 1 0 4.965 3.517 3.517 0 0 1-4.965 0 3.517 3.517 0 0 1 0-4.965m4.965 0 2.122 2.122m-7.087-7.087L7.3 5.5"/></svg>`,
      title: 'المجتمع',
      description: 'تعلم مع آلاف المصورين'
    },
    {
      icon: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3H9v3a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-6H4a1 1 0 0 1-.707-1.707l6-6Z"/></svg>`,
      title: 'تركيز عملي',
      description: 'أمثلة واقعية يمكنك تطبيقها اليوم'
    },
    {
      icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0v-9m0 0 4 4m-4-4-4 4"/></svg>`,
      title: 'الجودة أولاً',
      description: 'محتوى مدروس ومكتوب بخبرة'
    }
  ];
  authors = [
  { name: 'سالم أحمد', role: 'مصور محترف', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face' },
  { name: 'محمد علي', role: 'مصور بورتريه', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face' },
  { name: 'إبراهيم حسن', role: 'مصور طبيعة', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face' },
  { name: 'داود خالد', role: 'مدرب تصوير', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face' },
  { name: 'ليث محمود', role: 'فنان بصري', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face' },
  { name: 'جمال عبدالله', role: 'مصور ومراجع تقني', avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=face' },
  { name: 'هاني الشمري', role: 'مصور طعام', avatar: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=150&h=150&fit=crop&crop=face' },
  { name: 'نادر سعيد', role: 'مصور شوارع', avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=face' },
  { name: 'خالد الفيصل', role: 'مصور فلكي', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=face' },
  { name: 'سامي الحربي', role: 'خبير تعديل صور', avatar: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=150&h=150&fit=crop&crop=face' },
  { name: 'فارس العلي', role: 'فنان فوتوغرافي', avatar: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=150&h=150&fit=crop&crop=face' },
  { name: 'عمر الراشد', role: 'مصور حياة برية', avatar: 'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?w=150&h=150&fit=crop&crop=face' },
  { name: 'منصور الزهراني', role: 'مصور زفاف', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face' },
  { name: 'باسم المصري', role: 'مصور فني', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face' },
  { name: 'رامي الخطيب', role: 'مصور ماكرو', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face' },
  { name: 'طارق النعيمي', role: 'مصور معماري', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face' },
  { name: 'رؤى الصالح', role: 'مصور تجاري', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face' },
  { name: 'فيصل الدوسري', role: 'مصور جوي', avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=face' },
  { name: 'ياسر العتيبي', role: 'مصور رحلات', avatar: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=150&h=150&fit=crop&crop=face' },
  { name: 'ماجد القحطاني', role: 'مصور استوديو', avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=face' },
  { name: 'أحمد الشهري', role: 'مصور رياضي', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=face' },
  { name: 'عبدالله الغامدي', role: 'مصور عقارات', avatar: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=150&h=150&fit=crop&crop=face' },
  { name: 'نايف المطيري', role: 'مصور مواليد', avatar: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=150&h=150&fit=crop&crop=face' },
  { name: 'دحام الحسيني', role: 'فنان بصري', avatar: 'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?w=150&h=150&fit=crop&crop=face' },
  { name: 'فهد السبيعي', role: 'مراجع معدات', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face' },
  { name: 'سلطان الراجحي', role: 'فنان تصوير', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face' },
  { name: 'كريم الفهد', role: 'خبير تقني', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face' },
  { name: 'راشد الجاسر', role: 'فنان بصري', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face' },
];
}