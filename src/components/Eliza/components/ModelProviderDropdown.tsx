import { Dropdown } from './Dropdown';
import {
  MODEL_PROVIDER_NAMES,
  MODEL_PROVIDER_NAMES_MAP,
} from '../utils/constants';
import { Text } from './Text';
import { FaCheck } from 'react-icons/fa6';
import { useElizaForm } from '../hooks/useElizaForm';
import { Controller, useWatch } from 'react-hook-form';
import { Input } from './Input';
import { Box } from './Box';
import { useScrollToError } from '../hooks/useScrollToError';
import type { CharacterFormSchema } from '../utils/schema';

export const ModelProviderDropdown: React.FC = () => {
  const {
    control,
    formState: { errors },
  } = useElizaForm();

  const modelProviderDropdownErrorRef = useScrollToError(
    'modelProvider',
    errors,
  );

  const provider: CharacterFormSchema['modelProvider'] = useWatch({
    control,
    name: 'modelProvider',
  });

  const triggerLabel = provider
    ? MODEL_PROVIDER_NAMES_MAP[provider].label
    : 'Select a provider';

  return (
    <Controller
      control={control}
      name="modelProvider"
      render={({ field }) => (
        <Dropdown.Root>
          <Box className="gap-4" ref={modelProviderDropdownErrorRef}>
            <Dropdown.Trigger error={Boolean(errors.modelProvider)}>
              {triggerLabel}
            </Dropdown.Trigger>
            {errors.modelProvider && (
              <Input.Hint error>{errors.modelProvider.message}</Input.Hint>
            )}
          </Box>
          <Dropdown.Content>
            {MODEL_PROVIDER_NAMES.map((provider) => {
              const isSelected = field.value === provider;
              return (
                <Dropdown.Item
                  key={provider}
                  onClick={() => field.onChange(provider)}
                >
                  <div className="flex items-center justify-between">
                    <Text variant={isSelected ? 'primary' : 'secondary'}>
                      {MODEL_PROVIDER_NAMES_MAP[provider].label}
                    </Text>
                    {isSelected && <FaCheck className="size-14" />}
                  </div>
                </Dropdown.Item>
              );
            })}
          </Dropdown.Content>
        </Dropdown.Root>
      )}
    />
  );
};
