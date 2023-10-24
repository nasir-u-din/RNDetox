import { device, element, by, expect } from 'detox';

describe('Sample React Native App', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should display the "Step One" section', async () => {
    await expect(element(by.text('Step One'))).toBeVisible();
    await expect(element(by.text('Edit App.tsx to change this screen and then come back to see your edits.'))).toBeVisible();
  });

  

 

  it('should display the "Learn More" section', async () => {
    await expect(element(by.text('Learn More'))).toBeVisible();
    await expect(element(by.text('Read the docs to discover what to do next:'))).toBeVisible();
  });
});
