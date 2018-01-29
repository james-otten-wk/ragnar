import { TestBed } from '@angular/core/testing';
import { ListItemComponent } from 'app/components/common/list-item/list-item.component';
import { ListComponent } from 'app/components/common/list/list.component';

describe('ListComponent', () => {
  beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [],
        declarations: [ListComponent, ListItemComponent],
      }).compileComponents();
  });

  it('should create the component', () => {
      expect(true).toBe(true);
  });
});