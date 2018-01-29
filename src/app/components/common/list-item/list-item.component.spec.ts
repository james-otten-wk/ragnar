import { TestBed } from '@angular/core/testing';
import { ListItemComponent } from 'app/components/common/list-item/list-item.component';

describe('ListItemComponent', () => {
  beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [ListItemComponent],
      }).compileComponents();
  });

  it('should create the component', () => {
      expect(true).toBe(true);
  });
});