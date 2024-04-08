import React from 'react';
import { View, Text } from 'react-native';
import { pluralize, formatDuration, formatMetersToKilometers, getActiveOrdersCount, getTotalStops, getTotalDuration, getTotalDistance, translate } from 'utils';
import { Order } from '@fleetbase/sdk';
import { tailwind } from 'tailwind';
import { format } from 'date-fns';

const SimpleOrdersMetrics = ({ orders, date = new Date(), wrapperStyle, containerStyle }) => {
    return (
        <View style={[wrapperStyle]}>
            <View style={[tailwind('px-4'), containerStyle]}>
                <Text style={tailwind('font-semibold text-lg text-gray-50 w-full mb-1')}>{translate(`components.interface.Date.${format(date, 'eeee')}`)} {translate('Order.orders')}</Text>
                <View>
                    <View style={tailwind('flex flex-row items-center mb-1')}>
                        <Text style={tailwind('text-base text-gray-100')}>{getActiveOrdersCount(orders)} {translate('Order.orders')}</Text>
                        <Text style={tailwind('text-base text-gray-100 mx-2')}>•</Text>
                        <Text style={tailwind('text-base text-gray-100')}>{`${getTotalStops(orders)}`} {translate('Order.stops')}</Text>
                        <Text style={tailwind('text-base text-gray-100 mx-2')}>•</Text>
                        <Text style={tailwind('text-base text-gray-100')}>{formatDuration(getTotalDuration(orders))}</Text>
                        <Text style={tailwind('text-base text-gray-100 mx-2')}>•</Text>
                        <Text style={tailwind('text-base text-gray-100')}>{formatMetersToKilometers(getTotalDistance(orders))}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default SimpleOrdersMetrics;
