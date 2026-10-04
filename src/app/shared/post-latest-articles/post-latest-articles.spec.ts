import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostLatestArticles } from './post-latest-articles';

describe('PostLatestArticles', () => {
  let component: PostLatestArticles;
  let fixture: ComponentFixture<PostLatestArticles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostLatestArticles],
    }).compileComponents();

    fixture = TestBed.createComponent(PostLatestArticles);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
