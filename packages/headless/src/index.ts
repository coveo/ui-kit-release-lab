export {isString} from '@release-lab/bueno';
export const createEngine = () => ({state: {}});
export const getVersion = () => '0.0.1';
export const getEnvironment = () => process.env.NODE_ENV ?? 'production';
export const getBuildInfo = () => ({
  version: getVersion(),
  environment: getEnvironment(),
  timestamp: new Date().toISOString(),
});
