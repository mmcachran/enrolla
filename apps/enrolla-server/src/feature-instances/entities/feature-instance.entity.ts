import { ObjectType, Field } from '@nestjs/graphql';
import { Feature } from '../../features/entities/feature.entity';
import { GraphQLJSON, CuidResolver } from 'graphql-scalars';

@ObjectType()
export class FeatureInstance {
  @Field(() => CuidResolver)
  id: string;

  @Field(() => String)
  tenantId: string;

  @Field(() => CuidResolver)
  featureId: string;

  @Field(() => Feature)
  feature: Feature;

  @Field(() => GraphQLJSON)
  value: object;

  @Field(() => Date)
  createdAt: Date;
}
