import { AdvanceRoutesModule } from './advance-routes.module';

describe('AdvanceRoutesModule', () => {
  let advanceRoutesModule: AdvanceRoutesModule;

  beforeEach(() => {
    advanceRoutesModule = new AdvanceRoutesModule();
  });

  it('should create an instance', () => {
    expect(advanceRoutesModule).toBeTruthy();
  });
});
