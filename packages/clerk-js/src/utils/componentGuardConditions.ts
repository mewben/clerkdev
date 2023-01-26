import { Clerk, ClerkOptions, EnvironmentResource } from '@clerk/types';

export type ComponentGuardCondition = (
  clerk: Clerk,
  environment?: EnvironmentResource | null,
  options?: ClerkOptions,
) => boolean;

export const sessionExistsAndSingleSessionModeEnabled: ComponentGuardCondition = (
  clerk: Clerk,
  environment?: EnvironmentResource | null,
) => {
  return !!(clerk.session && environment?.authConfig.singleSessionMode);
};

export const noUserExists: ComponentGuardCondition = (clerk: Clerk) => {
  return !clerk.user;
};

export const noOrganizationExists: ComponentGuardCondition = (clerk: Clerk) => {
  return !clerk.organization;
};
