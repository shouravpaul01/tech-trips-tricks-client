import { RadioGroup } from '@nextui-org/radio';
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form';
import { RadioInputCustom } from '../ui/RadioInputCustom';
import { premiumOrFreeOptions } from '@/src/constent';
import { it } from 'node:test';
type TProps = {
    name: string;
  };
export default function RadioInputForPremiumContent({ name }: TProps) {
    
    const { control,formState:{errors} } = useFormContext();
    return (
      <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <RadioGroup
            {...field}
            color="secondary"
            orientation="horizontal"
            label="Select Content Type"
            defaultValue={"Free"}
          >
            {premiumOrFreeOptions?.map((item) => (
              <RadioInputCustom key={item.key} value={item.value}>
                {item.value}
              </RadioInputCustom>
            ))}
          
          </RadioGroup>
        )}
      />
       {errors[name] && <p className="text-red-500">{errors[name]?.message as string}</p>}
      </>
    );
}
