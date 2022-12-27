// This file has been auto-generated by model-interfaces/openapi repository. Please do not update it manually.
import { Application } from 'express';
import { generateOperation } from '@owlgrid-dev/http';
import { constants } from '@owlgrid-dev/constants';
import { generateSchemasCompilers } from '@owlgrid-dev/schemas';
import { operations } from './operations';

/**
 * Generate HTTP routes
 * @param app Express application
 */
export const bindHTTP = async (app: Application) => {
    // Generate service schema compilers
    const schemasCompilers = await generateSchemasCompilers(constants.administration.name);

    // For each operation, generate the route
    for (const operation of operations) {
        await generateOperation({
            app,
            schemasCompilers,
            ...operation,
        });
    }
};