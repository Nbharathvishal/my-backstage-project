import { CatalogBuilder } from '@backstage/plugin-catalog-backend';
import { GithubOrgReaderProcessor } from '@backstage/plugin-catalog-backend-module-github';
import { Router } from 'express';

export default async function createPlugin(env: { config: any; logger: any }): Promise<Router> {
  const builder = await CatalogBuilder.create(env);

  builder.addProcessor(
    GithubOrgReaderProcessor.fromConfig(env.config, { logger: env.logger }),
  );

  const { router } = await builder.build();
  return router;
}
