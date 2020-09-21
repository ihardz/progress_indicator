export interface ProcessProgress {
  processId: string;
  totalSteps: number
  currentStep: number;
  timeSpentSeconds: number;
}