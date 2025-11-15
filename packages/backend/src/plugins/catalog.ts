import { CatalogBuilder } from '@backstage/plugin-catalog-backend';
import { GithubOrgReaderProcessor } from '@backstage/plugin-catalog-backend-module-github';

export default async function createPlugin(env) {
  const builder = await CatalogBuilder.create(env);

  builder.addProcessor(
    GithubOrgReaderProcessor.fromConfig(env.config, {
      logger: env.logger,
    }),
  );

  const { processingEngine, router } = await builder.build();
  await processingEngine.start();
  return router;
}
