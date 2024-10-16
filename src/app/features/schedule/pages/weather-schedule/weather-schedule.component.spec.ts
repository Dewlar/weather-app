import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherScheduleComponent } from './weather-schedule.component';

describe('WeatherScheduleComponent', () => {
  let component: WeatherScheduleComponent;
  let fixture: ComponentFixture<WeatherScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherScheduleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
